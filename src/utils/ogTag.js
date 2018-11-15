import image from './devsonket.jpg';

export default (title, description) => {
  const head = document.getElementsByTagName('head')[0];

  const titleMeta = document.createElement('meta');
  const descriptionMeta = document.createElement('meta');
  const imageMeta = document.createElement('meta');

  titleMeta.setAttribute('property', 'og:title');
  descriptionMeta.setAttribute('property', 'og:description');
  imageMeta.setAttribute('property', 'og:image');

  titleMeta.content = title;
  descriptionMeta.content = description;
  imageMeta.content = image;

  head.appendChild(titleMeta);
  head.appendChild(descriptionMeta);
  head.appendChild(imageMeta);
}
