export default function Item({ params }: { params: any }) {
  return (
    <>
      <p>Item detail id: {params.id}</p>
    </>
  );
}
