import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface UXInfoCardProps {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

const InfoCard: React.FC<UXInfoCardProps> = ({ title, items, icon }) => {
  return (
    <Card className="InfoCard" elevation={0}>
      <CardContent className="card-content">
        
        {icon && <Box className="card-icon">{icon}</Box>}

        <Typography variant="h6" className="card-title">
          {title}
        </Typography>

        <Box component="ul" className="card-list">
          {items.map((item, index) => (
            <Typography
              key={index}
              component="li"
              variant="body2"
              className="card-item"
            >
              {item}
            </Typography>
          ))}
        </Box>

      </CardContent>
    </Card>
  );
};

export default InfoCard;