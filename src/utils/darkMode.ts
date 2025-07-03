export const isDarkMode = () => {
  const darkString = localStorage.getItem("dark");

  if (darkString === null)
    return saveDarkMode(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
    );

  return saveDarkMode(JSON.parse(darkString) as boolean);
};

export const toggleDarkMode = () => {
  const dark = !isDarkMode();
  saveDarkMode(dark);
  return dark;
};

const saveDarkMode = (dark: boolean) => {
  localStorage.setItem("dark", JSON.stringify(dark));
  document.documentElement.classList = dark ? "dark " : "";

  return dark;
};
