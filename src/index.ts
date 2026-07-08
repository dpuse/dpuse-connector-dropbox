// ── DPUse Framework
import { normalizeToError } from '@dpuse/dpuse-shared/errors';
import type {
    AuditObjectContentOptions,
    AuditObjectContentResult,
    ConnectorConfig,
    ConnectorInterface,
    ConnectorUtilities,
    FindObjectOptions,
    FindObjectResult,
    GetReadableStreamOptions,
    ListNodesOptions,
    ListNodesResult,
    PreviewObjectOptions,
    RecordRetrievalTypeId,
    RetrieveRecordsOptions,
    RetrieveRecordsSummary
} from '@dpuse/dpuse-shared/component/module/connector';
import { loadTool, type ToolConfig } from '@dpuse/dpuse-shared/component/module/tool';
import type { ParsingRecord, PreviewConfig } from '@dpuse/dpuse-shared/component/dataView';

// ── DPUse tools
import type { Tool as CSVParseTool } from '@dpuse/dpuse-tool-csv-parse';
import type { Tool as FileOperatorsTool } from '@dpuse/dpuse-tool-file-operators';

// ── Data
import config from '~/config.json';

// ── Connectors ───────────────────────────────────────────────────────────────────────────────────────────────────────

export class Connector implements ConnectorInterface {
    abortController: AbortController | undefined;
    readonly config: ConnectorConfig;
    connectorUtilities: ConnectorUtilities;
    readonly toolConfigs;

    constructor(connectorUtilities: ConnectorUtilities, toolConfigs: ToolConfig[]) {
        this.abortController = undefined;
        this.config = config as ConnectorConfig;
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
    async auditObjectContent(options: AuditObjectContentOptions, chunk: (rowCount: number) => void): Promise<AuditObjectContentResult> {
        this.abortController = new AbortController();

        try {
            const csvParseTool = await loadTool<CSVParseTool>(this.toolConfigs, 'csv-parse');
            const parseStreamOptions = { delimiter: options.valueDelimiterId, relax_column_count: true, relax_quotes: true };
            return { processedRowCount: 0, durationMs: 0 };
        } catch (error) {
            throw normalizeToError(error);
        } finally {
            this.abortController = undefined;
        }
    }

    // Find the folder path containing the specified object node
    findObject(options: FindObjectOptions): Promise<FindObjectResult> {
        return Promise.reject(new Error('Not found.')); // Not found.
    }

    // Get a readable stream for the specified object node path
    async getReadableStream(options: GetReadableStreamOptions): Promise<ReadableStream<Uint8Array>> {
        // Create an abort controller and extract its signal.
        const { signal } = (this.abortController = new AbortController());

        try {
            return await Promise.resolve({} as ReadableStream<Uint8Array>);
        } catch (error) {
            throw normalizeToError(error);
        } finally {
            this.abortController = undefined;
        }
    }

    // Lists all nodes (folders and objects) in the specified folder path
    listNodes(options: ListNodesOptions): Promise<ListNodesResult> {
        return Promise.resolve({} as ListNodesResult);
    }

    // Preview the contents of the object node with the specified path
    async previewObject(options: PreviewObjectOptions): Promise<PreviewConfig> {
        // Create an abort controller and extract its signal.
        const { signal } = (this.abortController = new AbortController());

        try {
            const asAt = Date.now();
            const startedAt = performance.now();

            // Preview file to determine file format and decode text.
            const fileOperatorsTool = await loadTool<FileOperatorsTool>(this.toolConfigs, 'file-operators');

            // Parse text, identify delimiters, and produce string value records.
            const csvParseTool = await loadTool<CSVParseTool>(this.toolConfigs, 'csv-parse');

            return {} as PreviewConfig;
        } catch (error) {
            throw normalizeToError(error);
        } finally {
            this.abortController = undefined;
        }
    }
    // Retrieves all records from a CSV object node using streaming and chunked processing
    async retrieveRecords(
        options: RetrieveRecordsOptions,
        chunk: (typeId: RecordRetrievalTypeId, records: ParsingRecord[]) => void,
        complete: (result: RetrieveRecordsSummary) => void
    ): Promise<void> {
        this.abortController = new AbortController();
        try {
            const csvParseTool = await loadTool<CSVParseTool>(this.toolConfigs, 'csv-parse');
            const parseStreamOptions = { delimiter: options.valueDelimiterId, info: true, relax_column_count: true, relax_quotes: true };
            complete({} as RetrieveRecordsSummary);
        } catch (error) {
            throw normalizeToError(error);
        } finally {
            this.abortController = undefined;
        }
    }
}
