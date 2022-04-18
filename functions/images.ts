export const jsonResponse = (value: any, init: ResponseInit = {}) =>
  new Response(JSON.stringify(value), {
    headers: { "Content-Type": "application/json", ...init.headers },
    ...init,
  });

const generatePreviewURL = ({
  previewURLBase,
  imagesKey,
  isPrivate,
}: {
  previewURLBase: string;
  imagesKey: string;
  isPrivate: boolean;
}) => {
  // If isPrivate, generates a signed URL for the 'preview' variant
  // Else, returns the 'blurred' variant URL which never requires signed URLs
  // https://developers.cloudflare.com/images/cloudflare-images/serve-images/serve-private-images-using-signed-url-tokens

  return "SIGNED_URL";
};

export const onRequestGet = async ({ env }: any) => {
  const { imagesKey } = (await env.IMAGES.get("setup", "json")) ;

  const kvImagesList = await env.IMAGES.list({
    prefix: `image:uploaded:`,
  });

  const images = kvImagesList.keys
    .map((kvImage: any) => {
      try {
        const { id, previewURLBase, name, alt, uploaded, isPrivate } =
          kvImage.metadata;

        const previewURL = generatePreviewURL({
          previewURLBase,
          imagesKey,
          isPrivate,
        });

        return {
          id,
          previewURL,
          name,
          alt,
          uploaded,
          isPrivate,
        };
      } catch {
        return undefined;
      }
    })
    .filter((image: any) => image !== undefined);

  return jsonResponse({ images });
};