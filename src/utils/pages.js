export function getPages() {
  const pages = [];
  const files = import.meta.glob('../pages/*.astro');

  for (const file in files) {
    const page = files[file];
    const url = file.replace('../pages/', '').replace('.astro', '');
    const title = page.title;

    pages.push({ url, title });
  }

  return pages;
}