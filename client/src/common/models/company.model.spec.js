import { Company } from './company.model';

describe('Company', () => {
    it('should set the properties with provided values', () => {
        let company = new Company(5, 'Bilbo', 'C', 'Description Here', 'www.google.com', true);
        expect(company.id).toBe(5);
        expect(company.name).toBe('Bilbo');
        expect(company.type).toBe('C');
        expect(company.description).toBe('Description Here');
        expect(company.website).toBe('www.google.com');
        expect(company.premium).toBe(true);
    });
});