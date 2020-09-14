import { Eto } from "@domain/entity/index"

export interface Handler {
    setNext(handler: Handler): Handler;

    handle(required: any): Eto;
}

/**
 * The default chaining behavior can be implemented inside a base handler class.
 */
export abstract class EquationAbstractHandler implements Handler {
    private nextHandler: Handler;
    name: string;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }

    public handle(required: any): Eto {
        
        if (this.nextHandler) {
            return this.nextHandler.handle(required);
        }

        const eto: Eto = {
            equation: 'not compatible',
            eto: null,
        }

        return eto;
    }
}