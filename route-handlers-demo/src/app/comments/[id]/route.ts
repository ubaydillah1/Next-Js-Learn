import { comments } from "../data";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const comment = comments.find((comment) => comment.id === parseInt(id));

  return new Response(JSON.stringify(comment));
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const body = await request.json();

  const { text } = body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  comments[index].text = text;

  return new Response(JSON.stringify(comments[index]));
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedComment = comments[index];
  comments.splice(index, 1);

  return new Response(JSON.stringify(deletedComment));
}
