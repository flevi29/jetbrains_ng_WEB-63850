import type { ApplicationConfig } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

const providers: NonNullable<
  Parameters<typeof bootstrapApplication>[1]
>["providers"] = [provideRouter([]), provideHttpClient()];

export const appConfig: ApplicationConfig = {
  providers,
};
