// json request to fetch data or permission.
export const jsonRequest = async ({
    path,
    baseUrl = "http://localhost:8000",
    method,
    headers = {},
    body,
    credentials = true,
}) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        ...(body ? { body } : {}),
        ...(credentials ? { credentials: "include" } : {}),
    });

    return { data: await res.json(), res };
};

// function to check if a user is authenticated to be redirected to a user-only page.
export const isAuthenticated = async () => {
    // const redirectTo = window.location.pathname;

    try {
        const { data, res } = await jsonRequest({
            path: "/isAuthenticated",
            method: "GET",
        });

        if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        } else {
            console.log(data);
            return data;
        }
    } catch (err) {
        console.log(err);
        // navigate(`/signin?redirectTo=${redirectTo}`, { replace: true });
    }
};
