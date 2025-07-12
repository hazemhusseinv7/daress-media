const NEXT_PUBLIC_CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL;
const CMS_API_TOKEN = process.env.CMS_API_TOKEN;

export async function fetchCMS<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${NEXT_PUBLIC_CMS_BASE_URL}/api${endpoint}`;

  const headers = new Headers({
    "Content-Type": "application/json",
    ...(CMS_API_TOKEN && { Authorization: `Bearer ${CMS_API_TOKEN}` }),
  });

  const response = await fetch(url, {
    headers,
    ...options,
  });

  if (!response.ok) {
    throw new Error(`CMS API request failed: ${response.statusText}`);
  }

  return response.json();
}
