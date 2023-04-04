import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormBooks from "../components/FormBooks";
import { getBookDetailById } from "../modules/fetch";
import Navbar from "../components/Navbar";

export default function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <>
    <Navbar/>
    <Box>
      <FormBooks bookData={book} />
    </Box>
    </>
  );
}
