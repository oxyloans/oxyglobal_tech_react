const SESSION_KEY = "admin_session";
const BASE = "http://65.0.147.157:9024";

export interface AdminSession {
  token: string;
  accessToken: string;
  refreshToken: string;
  userId: string;
  id: string;
  name: string;
  primaryType: string;
  status: string;
}

export const saveSession = (data: AdminSession) =>
  localStorage.setItem(SESSION_KEY, JSON.stringify(data));

export const getSession = (): AdminSession | null => {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? (JSON.parse(raw) as AdminSession) : null;
};

export const getToken = (): string | null => {
  const s = getSession();
  return s?.accessToken ?? s?.token ?? null;
};

export const clearSession = () => localStorage.removeItem(SESSION_KEY);

let isRefreshing = false;
let refreshQueue: ((token: string) => void)[] = [];

const drainQueue = (token: string) => {
  refreshQueue.forEach((cb) => cb(token));
  refreshQueue = [];
};

export const refreshAccessToken = async (): Promise<string | null> => {
  const session = getSession();
  if (!session?.refreshToken) return null;

  if (isRefreshing) {
    return new Promise((resolve) => {
      refreshQueue.push((token) => resolve(token));
    });
  }

  isRefreshing = true;
  try {
    const res = await fetch(`${BASE}/api/user-service/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: session.refreshToken }),
    });
    if (!res.ok) throw new Error("Refresh failed");
    const data = await res.json();
    const newToken: string = data.accessToken ?? data.token;
    saveSession({ ...session, accessToken: newToken, token: newToken });
    drainQueue(newToken);
    return newToken;
  } catch {
    clearSession();
    window.location.href = "/admin";
    return null;
  } finally {
    isRefreshing = false;
  }
};

const forceLogout = () => {
  clearSession();
  window.location.href = "/admin";
};

export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const res = await fetch(url, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${getToken()}` },
  });

  if (res.status !== 401) return res;

  const newToken = await refreshAccessToken();
  if (!newToken) { forceLogout(); throw new Error("Session expired"); }

  const retried = await fetch(url, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${newToken}` },
  });

  if (retried.status === 401) { forceLogout(); throw new Error("Session expired"); }

  return retried;
};
