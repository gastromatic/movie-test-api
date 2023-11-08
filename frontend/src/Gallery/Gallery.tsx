import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { CallToAction } from "./CallToAction";
import { useServerTime } from "./useServerTime";

export const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Gallery() {
  const serverTime = useServerTime();
  console.log();
  return (
    <>
      {serverTime && (
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
          }}
        >
          <Typography variant="h4" align="center" paragraph>
            Server Time (via GraphQL)
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary">
            {serverTime.date.toISOString()}
          </Typography>
        </Box>
      )}
      <CallToAction />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={`https://source.unsplash.com/featured?technology?i=${card}`}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
