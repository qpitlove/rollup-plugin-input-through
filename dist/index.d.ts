export default function rollupPluginInputThrough({ input }: {
    input?: (val: any) => any;
}): {
    name: string;
    resolveId(id: any): any;
    load(id: any): string;
};
