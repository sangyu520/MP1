import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'favicon.im' },
      { protocol: 'https', hostname: 'www.google.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  webpack(config, { isServer, dev }) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        !isServer && !dev ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            postcssOptions: {
              plugins: [
                'tailwindcss',
                'autoprefixer',
              ],
            },
          },
        },
      ],
    });

    if (!isServer && !dev) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[id].[contenthash:8].css',
        })
      );
    }

    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default (async () => withMDX(nextConfig))();
