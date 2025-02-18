'use client'
import { useParams } from "next/navigation";

function EditPage() {
  const id = useParams();
  console.log(id);
  return <div>EditPage</div>;
}

export default EditPage;
