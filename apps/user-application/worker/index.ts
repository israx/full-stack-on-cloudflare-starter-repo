import { initDatabase } from "@repo/data-ops/database";
import { App } from "./hono/app";

export default {
  fetch(request, env, ctx) {
    console.log("DB binding type:", typeof env.DB, !!env.DB);
    initDatabase(env.DB!);
    return App.fetch(request, env, ctx)
  },
} satisfies ExportedHandler<ServiceBindings>;
