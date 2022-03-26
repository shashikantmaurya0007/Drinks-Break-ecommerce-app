import React from "react";
import { useFilter, FILTER_ACTION, filterinitialstate } from "../state/index";

const Filter = () => {
  const {
    filterDispatch,
    filterstate: { sort_by, rating, price_range, category },
  } = useFilter();
  const categoryHandler = (e) => {
    const categroySelected = e.target.value;
    const contains = category.includes(categroySelected);
    if (contains) {
      filterDispatch({
        type: FILTER_ACTION.SORT_BY_CATEGORY,
        payload: {
          ...filterinitialstate,
          category: [...category.filter((a) => a !== categroySelected)],
        },
      });
    } else {
      filterDispatch({
        type: FILTER_ACTION.SORT_BY_CATEGORY,
        payload: {
          ...filterinitialstate,
          category: category.concat(categroySelected),
        },
      });
    }
  };

  return (
    <section className="filter_container">
      <div className="heading_clearall_btn">
        <h1>Filters</h1>

        <p
          onClick={() =>
            filterDispatch({
              type: FILTER_ACTION.RESET_FILTER,
              payload: { ...filterinitialstate },
            })
          }
          className="btn btn-primary btn-link"
        >
          Clear All
        </p>
      </div>
      <div className="price-slider">
        <h1>Price</h1>
        <div className="slider-container">
          <input
            type="range"
            onChange={(e) => {
              filterDispatch({
                type: FILTER_ACTION.SORT_BY_PRICE,
                payload: { ...filterinitialstate, price_range: e.target.value },
              });
            }}
            value={price_range}
            min="100"
            max="1500"
            className="slider"
          />
        </div>
        <div className="price_range">
          <h1>From:100</h1>
          <h1>From:1500</h1>
        </div>
      </div>

      <ul className="sim-unList">
        <div className="list-heading">Filter on the basis of Rating</div>

        <li className={Number(rating) === 4 ? "selected_filter" : ""}>
          <div className="radio">
            <label htmlFor="radio-1">
              <input
                id="radio-1"
                name="radio"
                onChange={(e) => {
                  filterDispatch({
                    type: FILTER_ACTION.SORTY_BY_RATING,
                    payload: { ...filterinitialstate, rating: e.target.value },
                  });
                }}
                checked={Number(rating) === 4}
                type="radio"
                value={4}
              />
              4 Star and above
            </label>
          </div>
        </li>
        <li className={Number(rating) === 3 ? "selected_filter" : ""}>
          <div className="radio">
            <label htmlfor="radio-2">
              <input
                id="radio-2"
                name="radio"
                type="radio"
                value={3}
                checked={Number(rating) === 3}
                onChange={(e) => {
                  filterDispatch({
                    type: FILTER_ACTION.SORTY_BY_RATING,
                    payload: { ...filterinitialstate, rating: e.target.value },
                  });
                }}
              />
              3 stars and above
            </label>
          </div>
        </li>
        <li className={Number(rating) === 2 ? "selected_filter" : ""}>
          <div className="radio">
            <label htmlfor="radio-3">
              <input
                id="radio-3"
                name="radio"
                type="radio"
                value={2}
                checked={Number(rating) === 2}
                onChange={(e) => {
                  filterDispatch({
                    type: FILTER_ACTION.SORTY_BY_RATING,
                    payload: { ...filterinitialstate, rating: e.target.value },
                  });
                }}
              />
              2 stars and above
            </label>
          </div>
        </li>
      </ul>

      <ul class="sim-unList">
        <div class="list-heading">Filter on Basis of Category</div>

        <li className={category.includes("beer") ? "selected_filter" : ""}>
          <div class="checkbox">
            <label htmlFor="checkbox-1">
              <input
                id="checkbox-1"
                name="checkbox"
                type="checkbox"
                value={"beer"}
                checked={category.includes("beer")}
                onChange={categoryHandler}
              />
              Beer
            </label>
          </div>
        </li>
        <li className={category.includes("whisky") ? "selected_filter" : ""}>
          <div class="checkbox">
            <label htmLFor="checkbox-8">
              <input
                id="checkbox-8"
                name="checkbox"
                type="checkbox"
                value={"whisky"}
                checked={category.includes("whisky")}
                onChange={categoryHandler}
              />
              Whisky
            </label>
          </div>
        </li>
        <li className={category.includes("vodka") ? "selected_filter" : ""}>
          <div class="checkbox">
            <label htmlFor="checkbox-2">
              <input
                id="checkbox-2"
                name="checkbox"
                type="checkbox"
                value={"vodka"}
                checked={category.includes("vodka")}
                onChange={categoryHandler}
              />
              Vodka
            </label>
          </div>
        </li>
        <li className={category.includes("wine") ? "selected_filter" : ""}>
          <div className="checkbox">
            <label htmlFor="checkbox-11">
              <input
                id="checkbox-11"
                name="checkbox"
                type="checkbox"
                value={"wine"}
                checked={category.includes("wine")}
                onChange={categoryHandler}
              />
              Wine
            </label>
          </div>
        </li>
      </ul>

      <ul className="sim-unList">
        <div className="list-heading">Filter on the basis of price order</div>

        <li className={sort_by === "high_to_low" ? "selected_filter" : ""}>
          <div className="radio">
            <label htmlfor="radio-6">
              <input
                id="radio-6"
                name="radio1"
                type="radio"
                checked={sort_by === "high_to_low"}
                onChange={() =>
                  filterDispatch({
                    type: FILTER_ACTION.SORT_BY_LOW_HIGH,
                    payload: { ...filterinitialstate, sort_by: "high_to_low" },
                  })
                }
              />
              High to Low
            </label>
          </div>
        </li>
        <li className={sort_by === "low_to_high" ? "selected_filter" : ""}>
          <div className="radio">
            <label htmlfor="radio-5">
              <input
                id="radio-5"
                name="radio1"
                type="radio"
                onChange={() =>
                  filterDispatch({
                    type: FILTER_ACTION.SORT_BY_LOW_HIGH,
                    payload: { ...filterinitialstate, sort_by: "low_to_high" },
                  })
                }
                checked={sort_by === "low_to_high"}
              />
              Low to High
            </label>
          </div>
        </li>
      </ul>
    </section>
  );
};

export { Filter };
