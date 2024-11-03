import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  // gap: "1rem",
});

const box = style({
  textAlign: "center",
});

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const productsTitle = style({
  marginBottom: "0.5rem",
});

const products = style({
  display: "flex",
  gap: "1rem",
});

const product = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "0.2rem",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "17px",
  marginBottom: "0.3rem",
});

const bonus = style({
  flex: 1,
});

export const appSt = {
  bottomBtn,
  container,
  box,
  productsTitle,
  products,
  productTitle,
  product,
  bonus,
};
