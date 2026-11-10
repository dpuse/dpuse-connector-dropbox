// ── External Dependencies & Registrations
import { describe, expect, it, vi } from 'vitest';

// ── Local Framework
import { Connector } from '@/index';

// ── Mocks ────────────────────────────────────────────────────────────────────────────────────────────────────────────

// Tools are loaded at run time from the engine; the connector only loads them so far, so any object will do.
vi.mock('@dpuse/dpuse-shared', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    loadTool: vi.fn().mockResolvedValue({})
}));

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

// The connector is not yet implemented, so these tests pin down what its placeholder actions do until it is.
describe('Connector', () => {
    it('abortOperation is a no-op when nothing is running', () => {
        const connector = new Connector({} as never, []);
        expect(() => {
            connector.abortOperation();
        }).not.toThrow();
    });

    it('finds no object', async () => {
        await expect(new Connector({} as never, []).findObject({ nodeId: 'x' } as never)).rejects.toThrow('Not found.');
    });

    it('returns placeholder results', async () => {
        const connector = new Connector({} as never, []);
        const complete = vi.fn();

        expect(await connector.auditObjectContent({ path: '/a.csv' } as never, vi.fn())).toEqual({ contentAuditConfig: {}, hasHeaders: false });
        expect(await connector.getReadableStream({ id: '', path: '/a.csv' })).toEqual({});
        expect(await connector.listNodes({ folderPath: '' })).toEqual({});
        expect(await connector.previewObject({ path: '/a.csv' } as never)).toEqual({});
        await connector.retrieveRecords({ path: '/a.csv' } as never, vi.fn(), complete);

        expect(complete).toHaveBeenCalledWith({});
    });
});
