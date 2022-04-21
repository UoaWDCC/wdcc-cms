import { Container } from "./InitiativeCard.styled";
interface InitiativeCardProps {
  photo: any;
  description: string;
  title: string;
}

function InitiativeCard({ title, description, photo }: InitiativeCardProps) {
  return (
    <Container>
      <div>
        <img src={photo} alt={title} />
      </div>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
}

export default InitiativeCard;
