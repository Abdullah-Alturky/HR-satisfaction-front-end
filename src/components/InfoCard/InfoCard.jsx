import { StyledCard } from './InfoCard.styled';

function InfoCard({ icon, info, value }) {
  return (
    <StyledCard>
      <div>
        <p style={{ fontSize: '1.5rem', margin: '0', opacity: '0.8' }}>
          {info}
        </p>
        <p style={{ fontSize: '1.2rem', margin: '0', fontWeight: 'bold' }}>
          {value}
        </p>
      </div>
      <div>{icon}</div>
    </StyledCard>
  );
}

export default InfoCard;
