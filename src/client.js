import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "fjyf4dlm",
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: "skkLVD7VuZMjdO5jXqiOBret9dpGxHPRWH2IlwKHW5PbDfSePR6QXpsY4QjFCUVEWm8jWYdHHoCwYCTUbEDm452GHPMBiqthWLTAWnvfLcNaDiPqJ8kfwnjom5zZPaBRlnFBBFCUBgd5SeHOO86BqRSgjcaiE4h0ZVHG4BY5ovBiQVGQESPP",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
