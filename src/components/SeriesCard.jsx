import styled from "styled-components";  // Importing styled-components for styling

export const SeriesCard = ({ data }) => {
  /// data is a prop and here we are destructuring it
  const { img_url, name, rating, description, genre, cast, watch_url } = data;

  // const Buttonstyle = {

  //   background: `${rating >= 8.5 ? "red": "yellow" }`,
  //   color: `${rating >= 8.5 ? "white": "black" }`,
  //   padding: '10px 20px',
  //   fontSize: '1rem',
  //   border: 'none',
  //   borderRadius: '6px',
  //   cursor: 'pointer',
  //   transition: 'all 0.3s ease',
  //   fontWeight: 'bold',
  //   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
  // };


  //STYLE COMPONENTS USING TEMPLATES LITERALS
  const StyledButton = styled.button`
    background: ${(props) => (props.rating >= 8.5 ? "red" : "yellow")};
    color: ${(props) => (props.rating >= 8.5 ? "white" : "black")};
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  `;

  return (
    <div className="card">
      <li style={{ listStyle: "none" }}>
        <div>
          <div>
            <img src={img_url} alt={name} className="card-img" />
          </div>
          <div className="card-text">
            <h1>Name: {name} </h1>
            <h3>
              Rating:{" "}
              <span className={rating >= 8.5 ? "redish" : "yellowish"}>
                {" "}
                {rating}{" "}
              </span>
            </h3>

            <p>Description : {description}</p>

            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={watch_url} target="_blank">
              {/* <button style={Buttonstyle} >Watch Now</button> */}
              <StyledButton rating={rating}>Watch Now</StyledButton>
            </a>
          </div>

          {/* <p>Genre: {returnGenre()}</p>
      <button>{canWatch()}</button> <br/> <br/> */}
        </div>
      </li>
    </div>
  );
};
