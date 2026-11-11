// ── DPUse Framework
import type {
    AuditObjectContentOptions,
    AuditObjectContentResult,
    ConnectorInterface,
    ConnectorUtilities,
    ContentAuditConfig,
    FilePreviewerInterface,
    FindObjectOptions,
    FindObjectResult,
    GetReadableStreamOptions,
    ListNodesOptions,
    ListNodesResult,
    ParsedRecord,
    PreviewObjectOptions,
    PreviewObjectResult,
    RecordRetrievalTypeId,
    RetrieveRecordsOptions,
    RetrieveRecordsSummary,
    ToolConfig
} from '@dpuse/dpuse-shared';
import { getValueDelimiterCharacter, loadTool, normalizeToError } from '@dpuse/dpuse-shared';

// ── DPUse Tools
import type { Tool as CSVParseTool } from '@dpuse/dpuse-tool-adaltas-csv-parser';

// ── Connectors ───────────────────────────────────────────────────────────────────────────────────────────────────────

export class Connector implements ConnectorInterface {
    private abortController: AbortController | undefined; // The latest operation's. An operation that ends clears it only if no later one has replaced it.
    private readonly connectorUtilities: ConnectorUtilities;
    private readonly toolConfigs;

    constructor(connectorUtilities: ConnectorUtilities, toolConfigs: ToolConfig[]) {
        this.abortController = undefined;
        this.connectorUtilities = connectorUtilities;
        this.toolConfigs = toolConfigs;
    }

    // Operations ──────────────────────────────────────────────────────────────────────────────────────────────────────

    // Abort the currently running operation
    abortOperation(): void {
        if (!this.abortController) return;
        this.abortController.abort();
        this.abortController = undefined;
    }

    // Audit object content
    async auditObjectContent(options: AuditObjectContentOptions, _chunk: (recordCount: number, byteCount: number) => void): Promise<AuditObjectContentResult> {
        const abortController = new AbortController();
        this.abortController = abortController;

        try {
            const csvParseTool = await loadTool<CSVParseTool>(this.toolConfigs, 'adaltas-csv-parser');
            const parseStreamOptions = { delimiter: getValueDelimiterCharacter(options.valueDelimiterId), relax_column_count: true };
            return { contentAuditConfig: {} as ContentAuditConfig, hasHeaders: false };
        } catch (error) {
            throw normalizeToError(error);
        } finally {
            if (this.abortController === abortController) this.abortController = undefined;
        }
    }

    // Find the folder path containing the specified object node
    findObject(_options: FindObjectOptions): Promise<FindObjectResult> {
        return Promise.reject(new Error('Not found.')); // Not found.
    }

    // Get a readable stream for the specified object node path
    async getReadableStream(_options: GetReadableStreamOptions): Promise<ReadableStream<Uint8Array>> {
        // Create an abort controller and extract its signal.
        const abortController = new AbortController();
        this.abortController = abortController;
        const { signal } = abortController;

        try {
            // eslint-disable-next-line unicorn/no-useless-promise-resolve-reject -- Placeholder until this action is implemented.
            return await Promise.resolve({} as ReadableStream<Uint8Array>);
        } catch (error) {
            throw normalizeToError(error);
        } finally {
            if (this.abortController === abortController) this.abortController = undefined;
        }
    }

    // Lists all nodes (folders and objects) in the specified folder path
    listNodes(_options: ListNodesOptions): Promise<ListNodesResult> {
        return Promise.resolve({} as ListNodesResult);
    }

    // Preview the contents of the object node with the specified path
    async previewObject(_options: PreviewObjectOptions): Promise<PreviewObjectResult> {
        // Create an abort controller and extract its signal.
        const abortController = new AbortController();
        this.abortController = abortController;
        const { signal } = abortController;

        try {
            const asAt = Date.now();
            const startedAt = performance.now();

            // Preview file to determine file format and decode text.
            const fileOperatorsTool = await loadTool<FilePreviewerInterface>(this.toolConfigs, 'file-previewer');

            // Parse text, identify delimiters, and produce string value records.
            const csvParseTool = await loadTool<CSVParseTool>(this.toolConfigs, 'adaltas-csv-parser');

            return {} as PreviewObjectResult;
        } catch (error) {
            throw normalizeToError(error);
        } finally {
            if (this.abortController === abortController) this.abortController = undefined;
        }
    }
    // Retrieves all records from a CSV object node using streaming and chunked processing
    async retrieveRecords(
        options: RetrieveRecordsOptions,
        chunk: (typeId: RecordRetrievalTypeId, records: ParsedRecord[]) => void,
        complete: (result: RetrieveRecordsSummary) => void
    ): Promise<void> {
        const abortController = new AbortController();
        this.abortController = abortController;
        try {
            const csvParseTool = await loadTool<CSVParseTool>(this.toolConfigs, 'adaltas-csv-parser');
            const parseStreamOptions = { delimiter: getValueDelimiterCharacter(options.valueDelimiterId), info: true, relax_column_count: true };
            complete({} as RetrieveRecordsSummary);
        } catch (error) {
            throw normalizeToError(error);
        } finally {
            if (this.abortController === abortController) this.abortController = undefined;
        }
    }
}
