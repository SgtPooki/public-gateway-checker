declare class Util {
    static HASH_TO_TEST: string;
    static IMG_HASH: string;
    static HASH_STRING: string;
    static checkViaImgSrc(imgUrl: string | URL): Promise<void>;
    static gatewayHostname(url: URL): string;
    static expectSubdomainRedirect(url: string | URL): Promise<void>;
}
export { Util };
//# sourceMappingURL=Util.d.ts.map