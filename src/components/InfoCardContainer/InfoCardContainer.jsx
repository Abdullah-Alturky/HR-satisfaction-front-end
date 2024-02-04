import { WalletCard } from "../Cards/Cards";
import { StyledInfoCardContainer } from "./InfoCardContainer.styled";

function InfoCardContainer({ infoList }) {
  return (
    <StyledInfoCardContainer>
      {infoList.map((info) => (
        <>
          {/* <InfoCard
            key={info.info}
            info={info.info}
            icon={info.icon}
            value={info.value}
          /> */}
          <WalletCard text={info.value} sub={info.label} icon={info.icon} />
        </>
      ))}
    </StyledInfoCardContainer>
  );
}

export default InfoCardContainer;
