import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";


const FeaturedItem = (props) => {
const navigate = useNavigate();
  const [value, setValue] = React.useState(props.item.rating);
  const [hover, setHover] = React.useState(-1);

const labels = {
  1: "Hyödytön+",
  2: "Huono+",
  3: "Hyvä",
  4: "Vaikuttava",
  5: "Erinomainen+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

  return (
    <div
      onClick={() => {
        navigate(`/hotels/${props.item._id}`);
      }}
    >
      <div className="fpItem">
        <img src={props.item.photos[0]} alt="" className="fpImg" />
        <span className="fpName">{props.item.name}</span>
        <span className="fpCity">{props.item.city}</span>
        <span className="fpPrice">
        Alkaen {props.item.cheapestPrice}€
        </span>
        {props.item.rating && (
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              readOnly
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        )}
      </div>
    </div>
  );
};

export default FeaturedItem;
