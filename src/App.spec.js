
import {render} from '@testing-library/vue'

import App from "./App.vue"; 


describe("App", () => {

    it("renders ok", () => {
        
        const {getByText} = render(App, {
            store: {
                state: {
                    chartData: [],
                  },
            }
        });

        const text = getByText("Number of babies given the name 'David' in Victoria"); 
        expect(text).toBeDefined();
    }); 
}); 