async function page({ params }: { params: Promise<{ id: string }> }) {
  console.log(await params );
  return <div>page</div>;
}

export default page;
