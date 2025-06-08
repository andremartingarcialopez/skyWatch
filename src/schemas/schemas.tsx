import { z } from "zod";

export const SchemaWeather = z.object({
    name: z.string(),
    main: z.object({
        feels_like: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
        temp: z.number(),
        humidity: z.number()
    })

});