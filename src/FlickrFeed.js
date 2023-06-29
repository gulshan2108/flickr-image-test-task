import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  CircularProgress,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";

const RootContainer = styled("div")({
  flexGrow: 1,
  padding: "16px",
});

const Image = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
});

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "30px",
  justifyContent: "center",
});

const ImgCard = styled("div")({
  display: "block",
  overflow: "hidden",
  height: "300px",
  borderRadius: 5,
  img: {
    height: "300px",
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
  },
});

const ProgressBarStyle = styled("div")({
  position: "fixed",
  zIndex: "99",
  background: "#ffffffbf",
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SearchInput = styled(TextField)({
  marginRight: "16px",
});

const CardNoImg = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const FlickrFeed = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataList();
  }, []);

  const fetchDataList = async () => {
    setLoading(true);
    setData([]);
    const apiUrl = `/api/getAll?tags=${searchTerm}`;
    const res = await axios.get(apiUrl);
    setData(res?.data?.items || []);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDataList();
  };

  return (
    <>
      <RootContainer>
        <SearchContainer>
          <form>
            <SearchInput
              label="Search"
              variant="outlined"
              value={searchTerm}
              size="small"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Button
              onClick={handleSearch}
              type="submit"
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </form>
        </SearchContainer>
        {data.length > 0 ? (
          <Grid container spacing={2}>
            {data?.map((item) => {
              return (
                <Grid item key={item.link} xs={12} sm={6} md={4} lg={3}>
                  <ImgCard>
                    <img src={item?.media?.m} alt={item?.title} />
                  </ImgCard>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <>
            {loading ? (
              <ProgressBarStyle>
                <CircularProgress />
              </ProgressBarStyle>
            ) : (
              <CardNoImg>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      No images to display.
                    </Typography>
                  </CardContent>
                </Card>
              </CardNoImg>
            )}
          </>
        )}
      </RootContainer>
    </>
  );
};

export default FlickrFeed;
