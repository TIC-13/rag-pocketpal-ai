import { NativeModules } from "react-native";

type RagModuleType = {
  isLoaded: () => Promise<boolean>;
  loadFromInternalStorage: (tokenizerPath: string, vectorsPath: string, chunksPath: string) => Promise<boolean>;
  loadFromAndroidAssets: (tokenizerPath: string, vectorsPath: string, chunksPath: string) => Promise<boolean>;
  getPrompt: (query: string, k?: number) => Promise<string>;
};

const { RagModule } = NativeModules;

const Rag: RagModuleType = {
  isLoaded: () => RagModule.isLoaded(),
  loadFromAndroidAssets: (tokenizerPath, vectorsPath, chunksPath) =>
    RagModule.loadFromAndroidAssets(tokenizerPath, vectorsPath, chunksPath),
  loadFromInternalStorage: (tokenizerPath, vectorsPath, chunksPath) =>
    RagModule.loadFromInternalStorage(tokenizerPath, vectorsPath, chunksPath),
  getPrompt: (query, k = 2) => RagModule.getPrompt(query, k),
};

export default Rag;
