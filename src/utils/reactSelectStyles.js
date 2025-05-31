// src/utils/reactSelectStyles.js

const getCustomSelectStyles = () => {
  const isDark = document.documentElement.classList.contains("dark");

  return {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: isDark ? "#1f2937" : "var(--color-surface)",
      borderColor: state.isFocused ? "var(--color-primary)" : "var(--color-border-light)",
      boxShadow: "none",
      color: isDark ? "#f9fafb" : "var(--color-text)",
      fontSize: "0.85rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDark ? "#f9fafb" : "var(--color-text)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? isDark ? "#374151" : "var(--color-primary-hover)"
        : "transparent",
      color: isDark ? "#f9fafb" : "var(--color-text)",
      cursor: "pointer",
      fontSize: "0.85rem",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDark ? "#1f2937" : "var(--color-surface)",
      border: `1px solid ${isDark ? "#374151" : "var(--color-border-light)"}`,
      zIndex: 20,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: isDark ? "#9ca3af" : "#6b7280",
    }),
    input: (provided) => ({
      ...provided,
      color: isDark ? "#f9fafb" : "inherit",
    }),
  };
};

export default getCustomSelectStyles;
