import {
    useMutation,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

export default function App(): JSX.Element {
    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className="text-gray-400">Test</div>
            </QueryClientProvider>
        </>
    );
}
