import Button from "@mui/material/Button";
interface SocialsCardProps {
  text: string;
  link: string;
}

const SocialsCard = ({ text, link }: SocialsCardProps) => {
  return (
    <Button
      variant="outlined"
      sx={{ borderRadius: 8, p: 2, fontWeight: 700 }}
      href={link}
      target="_blank"
    >
      {text}
    </Button>
  );
};

export default SocialsCard;
