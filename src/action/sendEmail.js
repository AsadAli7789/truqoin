export const sendEmail = async (obj) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Email`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
};
