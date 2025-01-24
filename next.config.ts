import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",  // Generowanie statycznej strony
  trailingSlash: true, // Dodaje slash na końcu URL (np. /about/ zamiast /about)

  // Konfiguracja dla GitHub Pages
  basePath: isProd ? "/my-portfolio" : "", // Określa basePath tylko w produkcji
  assetPrefix: isProd ? "/my-portfolio/" : "", // Określa prefix dla zasobów (obrazków, czcionek)

  // Obsługa fontów i mediów
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/, // Dodanie obsługi fontów
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000, // Jeżeli fonty mają mniej niż 10 KB, będą wczytywane jako data URL
          name: '[name].[hash:8].[ext]', // Generowanie unikalnych nazw plików
        },
      },
    });

    return config;
  },
};

export default nextConfig;
