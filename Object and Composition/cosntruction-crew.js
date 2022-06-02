function constructionCrew(worker){

    if (worker.dizziness == true){
        let hydrated = worker.levelOfHydrated;
        worker.levelOfHydrated = ((worker.weight * 0.1) * worker.experience) + hydrated;
        worker.dizziness = false;
    }else{
        worker.levelOfHydrated = worker.levelOfHydrated;
        worker.dizziness = worker.dizziness;
    }
    console.log(worker);
}

constructionCrew({ weight: 80,

    experience: 1,
    
    levelOfHydrated: 0,
    
    dizziness: true })