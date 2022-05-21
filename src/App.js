import React from "react";
import { createApi } from "unsplash-js";
import { Fragment, useState, useEffect } from "react";
import { Container, Pagination } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SearchAppBar from "./components/NavBar";
import CustomizedCard from "./components/CustomizedCard"
import LoadingSkeleTon from "./components/LoadingSkeleTon"

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "W_YolNuH0ataS6oBlK0-9pKfEnGjd3kyPimgQtj_W4M"
});

const App = function () {
  const [data, setPhotosResponse] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(true);


  const handelPageChange = (e, pageNum) => {
    setPageNumber(pageNum)
  }
  const fetchData = () => {
    setLoading(true)
    api.search
      .getPhotos({ query: searchValue || "random", orientation: "landscape", per_page: "20", page: pageNumber })
      .then((result) => {
        setPhotosResponse(result);
        setLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setLoading(false);

      });
  }


  const handelSearch = () => {
    fetchData()
  }
  useEffect(() => {
    fetchData()
  }, [pageNumber, searchValue]);
  return (
    <Fragment>
      <CssBaseline />
      <Container sx={{ background: "#E4D1B9" }} maxWidth="xl">
        <Box sx={{ minHeight: '100vh', paddingBottom: 5 }}>
          <SearchAppBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handelSearch={handelSearch} />
          {loading ?
            <LoadingSkeleTon />
            : <Box display={'flex'} flex={4} justifuContent={"center"} alignItems={"start"} flexWrap={"wrap"} flexDirection={"row"}>
              {
                data.response.results.map(item => <CustomizedCard key={item.id} {...item} />)
              }
            </Box>}
          <Box display={'flex'} flex={4} justifuContent={"center"} alignItems={"start"} flexWrap={"wrap"} flexDirection={"row"}>
            <Pagination count={data?.response?.total_pages} color={"secondary"} onChange={handelPageChange} />
          </Box>
        </Box>
      </Container>
    </Fragment>

  );
}

export default App;