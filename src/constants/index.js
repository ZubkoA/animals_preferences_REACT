export const PREFERENCES = {
  DOG: "dog",
  CAT: "cat",
};

export const INITIAL_PREF_STATE =
  localStorage.getItem("pref_animal") || PREFERENCES.DOG;

export const CAT_URLS = [
  "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
  "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
];
export const DOG_URLS = [
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
  "https://paradepets.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg",
];
