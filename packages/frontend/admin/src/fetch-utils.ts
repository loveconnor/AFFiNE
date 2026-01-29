/**
 * Custom fetch utility with LoveNotes version header
 * Automatically adds the x-lovenotes-version header to all fetch requests
 */

// BUILD_CONFIG is defined globally in the LoveNotes project

/**
 * Wrapper around fetch that automatically adds the x-lovenotes-version header
 * @param input Request URL
 * @param init Request initialization options
 * @returns Promise with the fetch Response
 */
export const lovenotesFetch = (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      'x-lovenotes-version': BUILD_CONFIG.appVersion,
    },
  });
};
