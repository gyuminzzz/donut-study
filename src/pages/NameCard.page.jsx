import { LayOut } from "../common/LayOut";
import { NameCard } from "../components/NameCard";
import "../style/Pages.style.css";

export const NameCardPage = () => {
  return (
    <LayOut>
      <div className="card-component-container">
        <NameCard />
      </div>
    </LayOut>
  );
};

//작은 미션이지만 페이지와 컴포넌트 분리 이유
//1. 페이지는 보여지기만을 위한 것
//2. 컴포넌트는 미션 주기가 길기 때문에 재사용을 위해 분리