import DogsCard from "./DogsCard";
import dogs from "./dogs.css"

const DogsPage = (props) => {
  const { allDogs } = props;

  return (
    <>
      <section className="dogs-container">
        {allDogs.map((dog) => {
          return (
            <div key={dog.id}>
              <DogsCard
                id={dog.id}
                name={dog.name}
                breed={dog.breed}
                price={dog.price}
                description={dog.description}
                imageURL={dog.imageUrl}

              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default DogsPage;
<>This is list Dogs</>;
