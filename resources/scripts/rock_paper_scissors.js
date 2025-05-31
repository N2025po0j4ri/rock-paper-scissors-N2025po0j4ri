class RockPaperScissors {
  constructor(username) {
    this.username = username || 'User '; // Use username or fallback to 'User '
    this.score = {
      user: 0,
      cpu: 0 
    };
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse() {
    const acceptedValues = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * acceptedValues.length);
    return acceptedValues[randomIndex];
  }

  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors`)
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection) {
    if (userSelection === cpuSelection) {
      return 'tie';
    }

    if (
      (userSelection === 'rock' && cpuSelection === 'scissors') ||
      (userSelection === 'paper' && cpuSelection === 'rock') ||
      (userSelection === 'scissors' && cpuSelection === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection) {
    // Normalize user selection to lowercase
    userSelection = userSelection.toLowerCase();

    // Validate user selection
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(userSelection)) {
      throw new Error(`Invalid user selection: ${userSelection}`);
    }

    // 1. Get CPU random selection
    const cpuSelection = this.generateCPUResponse();

    // 2. Determine winner
    const result = this.determineWinner(userSelection, cpuSelection);

    // 3. Update score tally
    if (result === 'win') {
      this.score.user++;
    } else if (result === 'lose') {
      this.score.cpu++;
    }
    // tie: no score changes

    // 4. Add entry to game history log
    // Use the username directly
    const playerName = this.username;

    // Capitalize selections for display
    const userChoiceFormatted = userSelection.charAt(0).toUpperCase() + userSelection.slice(1);
    const cpuChoiceFormatted = cpuSelection.charAt(0).toUpperCase() + cpuSelection.slice(1);

    // Create message based on result
    let resultText;
    if (result === 'tie') {
      resultText = `It's a tie`;
    } else if (result === 'win') {
      resultText = `${playerName} wins`;
    } else {
      resultText = 'CPU wins';
    }

    const logEntry = `${playerName} selected ${userChoiceFormatted}, CPU selected ${cpuChoiceFormatted}: ${resultText}`;
    this.gameHistoryLog.push(logEntry);

    // Optionally, return the round details
    return {
      userSelection,
      cpuSelection,
      result,
      score: this.score,
      gameHistoryLog: this.gameHistoryLog
    };
  }
}
