import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 20px;
  // padding: 30px;
	border-radius: 30px;
  color: white;

  // width: 400px;
  // max-width: 100%;
  // min-width: 300px;

  // &:nth-child(2n) {
  //   background-color: #f5f5f5;
  // }

  div {
    // height: 150px;
    // width: 200px;
    // margin: 0 auto 50px auto;
  }

  img {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: left;
    line-height: 2rem;
  }

	.eventInfoContainer{
		display: flex;
		flex-direction: row;
	}

	.eventSchedule {
		background-color: black;
    padding: 2rem 2rem 2rem 2rem;
	}

	.eventSummary {
		background-color:rgb(29, 96, 157);
    padding: 2rem 2rem 2rem 2rem;
	}
`;
