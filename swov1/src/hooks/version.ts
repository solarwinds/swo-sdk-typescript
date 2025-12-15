import { SDKOptions } from "../lib/config.js";
import { Awaitable, SDKInitHook } from "./types.js";

export class VersionHook
    implements SDKInitHook {
    sdkInit(opts: SDKOptions): SDKOptions {
        const parts = opts.userAgent?.split(" ") || [];
        const docVersion = parts[3] || "unknown";

        opts.httpClient?.addHook("beforeRequest", (request: Request): Awaitable<Request> => {
                const headers = new Headers(request.headers);
                headers.set("X-SWO-API-Version", docVersion);
                return new Request(request, { headers });
        });

        return opts;
    }
}