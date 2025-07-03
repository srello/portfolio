import { toast } from "sonner";
import i18n from "../translation/config/i18n";

export async function copyToClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);

  toast(
    i18n.language === "es"
      ? "Texto copiado al portapapeles"
      : "Text copied to clipboard",
  );
}
