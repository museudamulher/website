export default function manifest() {
  return {
    name: 'MIMA - Museu Internacional da Mulher',
    short_name: 'MIMA',
    description: 'Uma associação de Homens e Mulheres. Um museu de Género onde todos cabem. Porque excluir não faz o nosso género.',
    start_url: '/',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
