const participants = ["Andre", "Brad", "Claudia", "Denise", "Emily", "Fabby"];

const fisherYatesShuffle = (participants:string[]) => {
    const shuffledParticipants = [...participants];
    const length = shuffledParticipants.length;

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [shuffledParticipants[i], shuffledParticipants[random]] = [shuffledParticipants[random], shuffledParticipants[i]];
    }

    return shuffledParticipants;
};

function secretSanta(participants: string[]): void{
  const shuffledList = fisherYatesShuffle(participants);
  const result = [];

  for (let i = 0; i < shuffledList.length; i++) {
    let giver = shuffledList[i];
    let receiver = shuffledList[(i + 1) % shuffledList.length];
    result.push({ giver, receiver });
  }

  console.log(result);
}

secretSanta(participants);
